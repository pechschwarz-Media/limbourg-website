import getOptions from '@/lib/queries/options/getOptions';
import Footer_2_inner from './Footer_2_inner';

export default async function Footer_2() {
    const options = await getOptions();
    const footerinfo = options?.footeroptions;
    console.log(options);

    return (
        <Footer_2_inner
            variant="dark"
            footerinfo={footerinfo}
        />
    );
}
