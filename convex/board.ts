import { v } from 'convex/values';
import { mutation } from './_generated/server';

const images = [
  '/placeholders/p_1.svg',
  '/placeholders/p_2.svg',
  '/placeholders/p_3.svg',
  '/placeholders/p_4.svg',
  '/placeholders/p_5.svg',
  '/placeholders/p_6.svg',
];
export const create = mutation({
  args: {
    orgId: v.string(),
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) throw new Error('Unauthorized');

    const randomImage = images[Math.floor(Math.random() * images.length)];

    const board = await ctx.db.insert('boards', {
      title: args.title,
      orgId: args.orgId,
      authorId: identity.subject,
      authorName: identity.name || '',
      imageUrl: randomImage,
    });

    return board;
  },
});
