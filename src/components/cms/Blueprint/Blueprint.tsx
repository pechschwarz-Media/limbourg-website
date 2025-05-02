import ComponentRenderer from '@/lib/ComponentRenderer';
import { ComponentData, FlexibleContent } from '@/lib/types';

type BlueprintProps = {
    blueprint: {
        acf: {
            content: FlexibleContent;
        };
    };
};

export default function BluePrint(content: ComponentData<BlueprintProps>) {
    if (!content?.blueprint?.acf?.content) return;
    return <ComponentRenderer content={content?.blueprint?.acf?.content} />;
}
