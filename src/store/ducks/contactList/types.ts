/**
 * Action types
 */
export enum ContactListTypes {
    LOAD_REQUEST = '@contactList/LOAD_REQUEST',
    LOAD_SUCCESS = '@contactList/LOAD_SUCCESS',
    LOAD_FAILURE = '@contactList/LOAD_FAILURE',

    DELETE_PERSON_REQUEST = '@contactList/DELETE_PERSON_REQUEST',
    DELETE_PERSON_SUCCESS = '@contactList/DELETE_PERSON_SUCCESS',
    DELETE_PERSON_FAILURE = '@contactList/DELETE_PERSON_FAILURE',

    DELETE_CONTACT_REQUEST = '@contactList/DELETE_CONTACT_REQUEST',
    DELETE_CONTACT_SUCCESS = '@contactList/DELETE_CONTACT_SUCCESS',
    DELETE_CONTACT_FAILURE = '@contactList/DELETE_CONTACT_FAILURE',
}

/**
 * Data types
 */
 export interface ContactList {
    success: boolean
    data: Person[]
}

export interface Person {
    id: string,
    full_name: string,
    age: number,
    contact_list: Contact[]
}

export interface Contact{
    id: string,
    contact_type: number,
    value: string
}

/**
 * State type
 */
 export interface ContactListState {
    readonly data: ContactList
    readonly loading: boolean
    readonly error: boolean
  }

