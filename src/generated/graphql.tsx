import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createQuote: QuoteResponse;
  updateQuoteStatus: Scalars['Boolean'];
  deleteQuote: Scalars['Boolean'];
  register: UserResponse;
  login: UserResponse;
};


export type MutationCreateQuoteArgs = {
  input: QuoteInput;
};


export type MutationUpdateQuoteStatusArgs = {
  id: Scalars['Int'];
  status: Scalars['Int'];
};


export type MutationDeleteQuoteArgs = {
  id: Scalars['Int'];
};


export type MutationRegisterArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  quotes: Array<Quote>;
  users: Array<User>;
  me?: Maybe<User>;
};

export type Quote = {
  __typename?: 'Quote';
  id: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  name: Scalars['String'];
  email: Scalars['String'];
  phoneNumber: Scalars['String'];
  description: Scalars['String'];
  status: Scalars['Float'];
  statusStr: Scalars['String'];
};

export type QuoteInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  phoneNumber: Scalars['String'];
  description: Scalars['String'];
};

export type QuoteResponse = {
  __typename?: 'QuoteResponse';
  errors?: Maybe<Array<FieldError>>;
  quote?: Maybe<Quote>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type CreateQuoteMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  phoneNumber: Scalars['String'];
  description: Scalars['String'];
}>;


export type CreateQuoteMutation = (
  { __typename?: 'Mutation' }
  & { createQuote: (
    { __typename?: 'QuoteResponse' }
    & { quote?: Maybe<(
      { __typename?: 'Quote' }
      & Pick<Quote, 'id' | 'name' | 'description' | 'statusStr'>
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type UpdateQuoteStatusMutationVariables = Exact<{
  id: Scalars['Int'];
  status: Scalars['Int'];
}>;


export type UpdateQuoteStatusMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateQuoteStatus'>
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username'>
  )> }
);

export type QuotesQueryVariables = Exact<{ [key: string]: never; }>;


export type QuotesQuery = (
  { __typename?: 'Query' }
  & { quotes: Array<(
    { __typename?: 'Quote' }
    & Pick<Quote, 'id' | 'name' | 'email' | 'phoneNumber' | 'description' | 'status' | 'statusStr' | 'createdAt' | 'updatedAt'>
  )> }
);


export const CreateQuoteDocument = gql`
    mutation createQuote($name: String!, $email: String!, $phoneNumber: String!, $description: String!) {
  createQuote(
    input: {name: $name, email: $email, phoneNumber: $phoneNumber, description: $description}
  ) {
    quote {
      id
      name
      description
      statusStr
    }
    errors {
      field
      message
    }
  }
}
    `;

export function useCreateQuoteMutation() {
  return Urql.useMutation<CreateQuoteMutation, CreateQuoteMutationVariables>(CreateQuoteDocument);
};
export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    user {
      id
      username
    }
    errors {
      field
      message
    }
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const UpdateQuoteStatusDocument = gql`
    mutation updateQuoteStatus($id: Int!, $status: Int!) {
  updateQuoteStatus(id: $id, status: $status)
}
    `;

export function useUpdateQuoteStatusMutation() {
  return Urql.useMutation<UpdateQuoteStatusMutation, UpdateQuoteStatusMutationVariables>(UpdateQuoteStatusDocument);
};
export const MeDocument = gql`
    query Me {
  me {
    id
    username
  }
}
    `;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};
export const QuotesDocument = gql`
    query Quotes {
  quotes {
    id
    name
    email
    phoneNumber
    description
    status
    statusStr
    createdAt
    updatedAt
  }
}
    `;

export function useQuotesQuery(options: Omit<Urql.UseQueryArgs<QuotesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<QuotesQuery>({ query: QuotesDocument, ...options });
};