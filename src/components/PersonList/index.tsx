import React, { Component } from "react";
import { ApplicationState } from "../../store";
import { Contact } from "../../store/ducks/contactList/types";
import { connect } from "react-redux";
import { ContactList } from "../../store/ducks/contactList/types";
import { bindActionCreators, Dispatch } from "redux";
import * as contactListActions from "../../store/ducks/contactList/actions";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EditIcon from "@mui/icons-material/Edit";
import PersonIcon from "@mui/icons-material/Person";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

interface StateProps {
  contactList: ContactList;
  open: boolean;
}

interface DispatchProps {
  loadRequest(): void;
  deleteContactRequest(id: string): void;
}

type Props = StateProps & DispatchProps;
type MyState = {
  open: false | string;
  contacts: Contact[];
};
class PersonList extends Component<Props, MyState> {
  state: MyState = {
    open: false,
    contacts: [],
  };
  componentDidMount() {
    const { loadRequest } = this.props;
    loadRequest();
  }
  render() {
    var { contactList } = this.props;

    let rows = contactList.data;

    const collapseList = (id : string) => {
        if(this.state.open === id)
            this.setState({ open: false})
        else
            this.setState({ open: id})
    };
    const deleteContact = (id: string) => {
        this.props.deleteContactRequest(id);
    }
    const validContactList = (contact_list: Contact[]):boolean =>{
        return contact_list.length > 0 ? true : false;
    }
    const setIcon = (type :number) => {
        switch(type){
            case 1:
                return <CallIcon />
            case 2: 
                return <EmailIcon />
            case 3: 
                return <WhatsAppIcon />
        }
    }
    return (
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Persons
          </ListSubheader>
        }
      >
        {rows.map((p) => {
          return (
            <div>
              <ListItem>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary={p.full_name} />
                <IconButton aria-label="delete">
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-label="edit">
                    <EditIcon />
                </IconButton>
                <IconButton aria-label="expand"  onClick={() => collapseList(p.id)}>
                    {this.state.open === p.id ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
              </ListItem>
                {
                    validContactList(p.contact_list)
                    ? <Collapse in={this.state.open === p.id} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {p.contact_list.map((c) => {
                        return (
                          <ListItem sx={{ pl: 4 }}>
                            <ListItemIcon>
                                { setIcon(c.contact_type)}
                            </ListItemIcon>
                            <ListItemText primary={c.value} />
                            <IconButton aria-label="delete" onClick={() => deleteContact(c.id)}>
                              <DeleteIcon />
                            </IconButton>
                          </ListItem>
                        );
                      })}
                    </List>
                  </Collapse>
                  : <span></span>
                }
            </div>
          );
        })}
      </List>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  contactList: state.contactList.data,
  open: false,
});
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(contactListActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PersonList);
