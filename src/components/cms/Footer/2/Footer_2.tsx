import getOptions from '@/lib/queries/options/getOptions';
import Footer_2_inner from './Footer_2_inner';

export default async function Footer_2() {
    const options = await getOptions();
    const footerinfo = options?.footeroptions;
    const logos = options?.logos;

    return (
        <Footer_2_inner
            variant="dark"
            footerinfo={footerinfo}
            logos={logos}
        />
    );
}
