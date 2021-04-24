import { cacheExchange, Cache } from '@urql/exchange-graphcache';
import { dedupExchange, fetchExchange } from 'urql';
import {
    LoginMutation,
    MeDocument,
    MeQuery,
    UpdateQuoteStatusMutationVariables,
} from '../generated/graphql';
import { betterUpdateQuery } from './betterUpdateQuery';
import { isServer } from './isServer';

export const createUrqlClient = (ssrExchange: any, ctx: any) => {
    let cookie = '';
    if (isServer()) {
        cookie = ctx?.req?.headers?.cookie;
    }
    return {
        url: 'http://localhost:4000/graphql',
        fetchOptions: {
            credentials: 'include' as const,
            headers: cookie ? { cookie } : undefined,
        },
        exchanges: [
            cacheExchange({
                updates: {
                    Mutation: {
                        login: (_result, args, cache, info) => {
                            betterUpdateQuery<LoginMutation, MeQuery>(
                                cache,
                                { query: MeDocument },
                                _result,
                                (result, query) => {
                                    if (result.login.errors) {
                                        return query;
                                    }
                                    return {
                                        me: result.login.user,
                                    };
                                }
                            );
                        },
                        updateQuoteStatus: (_result, args, cache, info) => {
                            cache.invalidate({
                                __typename: 'Quote',
                                id: (args as UpdateQuoteStatusMutationVariables).id,
                            });
                        },
                    },
                },
            }),
            dedupExchange,
            ssrExchange,
            fetchExchange,
        ],
    };
};
