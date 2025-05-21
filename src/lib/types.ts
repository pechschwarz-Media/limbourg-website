import { ButtonGroupProps } from '@/components/static/ButtonGroup/ButtonGroup';
import { sectionVariants } from '@/components/static/Section/Section';
import { buttonVariants } from '@/components/ui/Button/Button';
import { VariantProps } from 'class-variance-authority';

export type Category = {
    id: number;
    name: string;
    slug: string;
};

export type Author = {
    name: string;
    profileimage: AcfFile;
};

export type PostPreview = {
    id: number;
    title: string;
    permalink: string;
    excerpt: string;
    thumbnail: string | false;
    categories: Category[];
    date: string;
    author: Author;
};

export type AcfButton = {
    variant: VariantProps<typeof buttonVariants>['variant'];
    link: AcfLink;
};

export type ComponentData<TComponent> = {
    acf_fc_layout: string;
    options: Options;
    i: number;
} & TComponent;

export type AcfLink = {
    url: string;
    title: string;
    target: string;
};

export type AcfTextBlock = {
    text?: string;
    buttons?: ButtonGroupProps['buttons'];
    headline?: AcfHeadline;
};

export type AcfFile = {
    url: string;
    alt: string;
    width: number;
    height: number;
    type: string;
};

export type ImageType = {
    url: string;
    alt: string;
    width: number;
    height: number;
};

export type PostImageType = {
    source_url: string;
    alt_text: string;
    media_details: {
        width: number;
        height: number;
    };
};

export type AcfHeadline = {
    style: 'h0' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    tagline?: string;
    headline: string;
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
};

export type AcfMedia = {
    media: AcfFile | false;
    media_mobile: AcfFile | false;
};

export type Options = {
    menupunkt: NavbarProps[];
    content: { content: FlexibleContent };
    footeroptions: FooterOptions;
    logos: {
        logolight: ImageType;
        logodark: ImageType;
    };
    navbutton: AcfLink;
    subemenu_box: {
        media: AcfMedia;
        title: string;
        link: AcfLink;
    };
    rating: RatingType;
};

export type FormProps = {
    id: number;
    fields: FormField[];
    confirmations: {
        [key: string]: {
            type: string;
            message: string;
            url: string;
        };
    };
    button: {
        text: string;
    };
};

export type RatingType = {
    rating: { portrait: { image: ImageType }[]; ratingtext: string };
};

export type NavbarProps = {
    label: string;
    type: string;
    link: AcfLink;
    submenus: SubmenuProps[];
};

export type SubmenuProps = {
    label: AcfLink;
    thirdmenu: ThirdmenuProps[];
};

export type ThirdmenuProps = {
    link: AcfLink;
};

export type FooterOptions = {
    leftside: {
        adress: string;
    };
    menulist: { menuitem: AcfLink }[];
    rightside: {
        text: string;
        button: AcfLink;
        sociallinks: { icon: ImageType; link: AcfLink }[];
    };
    legallinks: { link: AcfLink }[];
};

export type Variant = VariantProps<typeof sectionVariants>['variant'];

export type Settings = {
    padding: {
        top: VariantProps<typeof sectionVariants>['paddingTop'];
        bottom: VariantProps<typeof sectionVariants>['paddingBottom'];
    };
    variant: Variant;
};

export type FormField = {
    type: string;
    id: number;
    formId: number;
    label: string;
    labelPlacement: string;
    content: string;
    isRequired: boolean;
    layoutGridColumnSpan: string | number;
    choices: {
        text: string;
        value: string;
        isSelected: boolean;
    }[];
    placeholder: string;
    checkboxLabel: string;
    inputs: null | { id: string }[];
};

export type Maybe<T> = T | false;

export type Repeater<TValue> = Maybe<Array<TValue>>;

export type FlexibleContent = Repeater<FlexibleLayout>;

export type FlexibleLayout = {
    acf_fc_layout: string;
};

export type APIRouteFormResponse = { status: boolean };

export type GravityFormsResponse = {
    is_valid: boolean;
    validation_messages: {
        [key: string]: string;
    };
};

export type PostProps = {
    title: {
        rendered: string;
    };
    link: string;
    excerpt: { rendered: string };
    acf: {
        category: number;
        authors: number[] | false | null;
        content: FlexibleContent;
    };
    date: string;
    _embedded: {
        'wp:featuredmedia': PostImageType[];
        'wp:term': [[{ name: string }]];
    };
};
