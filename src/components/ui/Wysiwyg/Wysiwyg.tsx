import { cn } from '@/lib/utils';
import parse from 'html-react-parser';

type WysiwygProps = {
    text: string;
    className?: string;
};

export function Wysiwyg({ text, className }: WysiwygProps) {
    if (!text) {
        return null;
    }

    return (
        <div
            className={cn(
                'prose max-w-full text-inherit text-[length:inherit] prose-p:m-0 prose-li:leading-body prose-li:mt-0  prose-li:last:mb-0 marker:text-neutral-300 marker:text-3xl prose-headings:m-0 prose-p:leading-body prose-headings:font-headline prose-h1:text-h1 prose-h2:text-h2 prose-h3:text-h3 prose-h4:text-h4 prose-h5:text-h5 prose-h6:text-h6 prose-strong:font-highlight space-y-theme-3xl prose-li:items-center',
                className,
            )}>
            {parse(text)}
        </div>
    );
}
