import dynamic from 'next/dynamic';
import { FlexibleContent } from './types';
import Testimonial_31 from '@/components/cms/Testimonial/31';

const Components = {
    blueprint: dynamic(() => import('@/components/cms/Blueprint/Blueprint')),
    hero_fullscreen_1: dynamic(() => import('@/components/cms/Hero/Fullscreen/1/Hero_Fullscreen_1')),
    hero_fullscreen_2: dynamic(() => import('@/components/cms/Hero/Fullscreen/2/Hero_Fullscreen_2')),
    hero_fullscreen_3: dynamic(() => import('@/components/cms/Hero/Fullscreen/3/Hero_Fullscreen_3')),
    hero_fullscreen_4: dynamic(() => import('@/components/cms/Hero/Fullscreen/4/Hero_Fullscreen_4')),
    hero_halfhorizontal_1: dynamic(() => import('@/components/cms/Hero/HalfHorizontal/1/Hero_HalfHorizontal_1')),
    hero_halfvertical_1: dynamic(() => import('@/components/cms/Hero/HalfVertical/1/Hero_HalfVertical_1')),
    feature_icons_1: dynamic(() => import('@/components/cms/Feature/Icons/1/Feature_Icons_1')),
    feature_icons_2: dynamic(() => import('@/components/cms/Feature/Icons/2/Feature_Icons_2')),
    feature_iconsslidervertical_1: dynamic(
        () => import('@/components/cms/Feature/IconsSliderVertical/1/Feature_IconsSliderVertical_1'),
    ),
    related_content_1: dynamic(() => import('@/components/cms/Related/Content/1/Related_Content_1')),
    faq_1: dynamic(() => import('@/components/cms/Faq/1/Faq_1')),
    faq_2: dynamic(() => import('@/components/cms/Faq/2/Faq_2')),
    faq_3: dynamic(() => import('@/components/cms/Faq/3/Faq_3')),
    header_1: dynamic(() => import('@/components/cms/Header/1/Header_1')),
    header_44: dynamic(() => import('@/components/cms/Header/44/Header_44')),
    header_47: dynamic(() => import('@/components/cms/Header/47/Header_47')),
    contact_form_1: dynamic(() => import('@/components/cms/Contact/Form/1/Contact_Form_1')),
    cta_halfhorizontal_1: dynamic(() => import('@/components/cms/Cta/HalfHorizontal/1/Cta_HalfHorizontal_1')),
    cta_fullcentered_1: dynamic(() => import('@/components/cms/Cta/FullCentered/1/Cta_FullCentered_1')),
    cta_39: dynamic(() => import('@/components/cms/Cta/39')),
    text_features_1: dynamic(() => import('@/components/cms/Text/Features/1/Text_Features_1')),
    text_features_2: dynamic(() => import('@/components/cms/Text/Features/2/Text_Features_2')),
    text_highlight_1: dynamic(() => import('@/components/cms/Text/Highlight/1/Text_Highlight_1')),
    text_highlight_2: dynamic(() => import('@/components/cms/Text/Highlight/2/Text_Highlight_2')),
    text_3: dynamic(() => import('@/components/cms/Text/3/Text_3')),
    imagetext_1: dynamic(() => import('@/components/cms/ImageText/1/ImageText_1')),
    imagetext_2: dynamic(() => import('@/components/cms/ImageText/2/ImageText_2')),
    imagetext_3: dynamic(() => import('@/components/cms/ImageText/3/ImageText_3')),
    imagetext_fullscreen_1: dynamic(() => import('@/components/cms/ImageText/Fullscreen/1/ImageText_Fullscreen_1')),
    bento_grid_1: dynamic(() => import('@/components/cms/Bento/Grid/1/Bento_Grid_1')),
    bento_grid_outside_1: dynamic(() => import('@/components/cms/Bento/Grid/Outside/1/Bento_Grid_Outside_1')),
    timeline_1: dynamic(() => import('@/components/cms/Timeline/1/Timeline_1')),
    logo_1: dynamic(() => import('@/components/cms/Logo/1/Logo_1')),
    logo_2: dynamic(() => import('@/components/cms/Logo/2/Logo_2')),
    testimonial_31: dynamic(() => import('@/components/cms/Testimonial/31')),
    testimonial_logoquotename_1: dynamic(
        () => import('@/components/cms/Testimonial/LogoQuoteName/1/Testimonial_LogoQuoteName_1'),
    ),
    blog_teaser_1: dynamic(() => import('@/components/cms/Blog/Teaser/1/Blog_Teaser_1')),
    blog_overview_1: dynamic(() => import('@/components/cms/Blog/Overview/1/Blog_Overview_1')),
    layout_115: dynamic(() => import('@/components/cms/Layout/115')),
    layout_249: dynamic(() => import('@/components/cms/Layout/249')),
    layout_484: dynamic(() => import('@/components/cms/Layout/484')),
    ifram_crisalix: dynamic(() => import('@/components/cms/Crisalix')),
    reviewsgrid: dynamic(() => import('@/components/cms/Reviewsgrid')),
    content_29: dynamic(() => import('@/components/cms/Content/29')),
    content_32: dynamic(() => import('@/components/cms/Content/32')),
    blogdetail_1: dynamic(() => import('@/components/cms/BlogDetail/1')),
    blogdetail_2: dynamic(() => import('@/components/cms/BlogDetail/2')),
    blogdetail_3: dynamic(() => import('@/components/cms/BlogDetail/3')),
    team_8: dynamic(() => import('@/components/cms/Team/8')),
};

export default function ComponentRenderer({ content }: { content: FlexibleContent }) {
    let number = 0;

    return (content || [])?.map((component, index) => {
        if (!Components[component.acf_fc_layout as keyof typeof Components] && process.env.NODE_ENV === 'development') {
            return <p key={index}>Komponente: {component.acf_fc_layout} hat kein Template!</p>;
        }

        const Component = Components[component?.acf_fc_layout as keyof typeof Components];

        if (component?.acf_fc_layout === 'blogdetail_1') {
            number++;
        }

        return (
            // @ts-expect-error
            <Component
                {...component}
                i={number}
                key={index}
            />
        );
    });
}
