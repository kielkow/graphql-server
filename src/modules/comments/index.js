import { GraphQLString, GraphQLList, GraphQLInputObjectType } from 'graphql';

import CommentType from './CommentType';

import { 
    getComments, 
    showComment, 
    saveComment, 
    deleteComment, 
    updateComment 
} from './CommentLoader';

export const queries = {
    comments: {
        type: GraphQLList(CommentType),
        resolve: getComments
    },
    comment: {
        type: CommentType,
        resolve: showComment,
        args: {
            input: {
                type: new GraphQLInputObjectType({
                    name: 'CommentInputShow',
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

export const mutations = {
    saveComment: {
        type: CommentType,
        resolve: saveComment,
        args: {
            input: {
                type: new GraphQLInputObjectType({
                    name: 'CommentInputSave',
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
    updateComment: {
        type: CommentType,
        resolve: updateComment,
        args: {
            input: {
                type: new GraphQLInputObjectType({
                    name: 'CommentInputUpdate',
                    fields: {
                        id: {
                            type: GraphQLString
                        },
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