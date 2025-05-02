import { Oval } from 'react-loader-spinner';

export function Loader({ text }: { text: string }) {
    return (
        <div className="inline-flex items-center gap-theme-lg">
            <Oval
                visible={true}
                height="28"
                width="28"
                color="#181818"
                secondaryColor="#181818"
                ariaLabel="oval-loading"
                strokeWidth="6"
            />
            {text}
        </div>
    );
}
