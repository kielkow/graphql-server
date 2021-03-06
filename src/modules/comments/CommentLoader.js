import Comment from './CommentModel';

export async function getComments() {
    const comments = await Comment.find();
    return comments;
}

export async function showComment(_, { input }) {
    const comment = await Comment.findOne({ _id: input.id });
    return comment;
}
export async function saveComment(_, { input }) {
    if (!input.name) throw new Error('Name must be informed.');
    if (!input.content) throw new Error('Content must be informed.');

    const comment = await Comment.create(input);

    return comment;
}

export async function updateComment(_, { input }) {
    const comment = await Comment.findOneAndUpdate(
        { 
            _id: input.id 
        }, 
        { 
            name: input.name,
            content: input.content
        },
        {
            new: true
        }
    );

    return comment;
}

export async function deleteComment(_, { input }) {
    const comment = await Comment.findOneAndDelete({ _id: input.id });
    return comment;
}
