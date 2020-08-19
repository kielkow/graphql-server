import { GraphQLString, GraphQLList, GraphQLInputObjectType } from 'graphql';

import CommentType from './CommentType';
import { getComments, saveComment, deleteComment } from './CommentLoader';

export const queries = {
    comments: {
        type: GraphQLList(CommentType),
        resolve: getComments
    }
};

export const mutations = {
    saveComment: {
        type: CommentType,
        resolve: saveComment,
        args: {
            input: {
                type: new GraphQLInputObjectType({
                    name: 'CommentInput',
                    fields: {
                        name: {
                            type: GraphQLString
                        },
                        content: {
                            type: GraphQLString
                        },
                    },
                })
            }
        },
    },
    deleteComment: {
        type: CommentType,
        resolve: deleteComment,
        args: {
            input: {
                type: new GraphQLInputObjectType({
                    name: 'CommentInputDelete',
                    fields: {
                        id: {
                            type: GraphQLString
                        },
                    },
                })
            }
        },
    }
};