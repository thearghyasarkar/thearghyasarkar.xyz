import { format, compareDesc, parseISO } from 'date-fns';

export const sortBlogs = (blogs) => {
    return blogs.slice().sort((a, b) => compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt)));
    }

export const formatDate = (date) => {
    return format(parseISO(date), 'MMMM dd, yyyy');
    }

