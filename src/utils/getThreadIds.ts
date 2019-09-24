import R from 'ramda';

interface IThread {
    comment: string;
    num: string;
}

export const restrictFap = (comment: string): boolean =>
    !R.toUpper(comment).includes('ФАП') &&
    !R.toUpper(comment).includes('FAP') &&
    !R.toUpper(comment).includes('ТРАП');

export default (threads: IThread[]): string[] =>
    R.pipe(
        R.filter<{comment: string; num: string}, 'array'>(
            thread =>
                R.toUpper(thread.comment).includes('WEBM') &&
                restrictFap(thread.comment)
        ),
        R.map(R.prop('num'))
    )(threads);
