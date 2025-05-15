import Navbar_1 from '@/components/cms/Navbar/1/Navbar_1';
import getOptions from '@/lib/queries/options/getOptions';

export default async function Header() {
    const options = await getOptions();
    const navbar = options.menupunkt;
    const navbutton = options.navbutton;
    return (
        <Navbar_1
            navbar={navbar}
            variant="light"
            navbutton={navbutton}
            options={options}
        />
    );
}
