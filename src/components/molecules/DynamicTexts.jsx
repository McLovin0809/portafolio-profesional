import React from "react";
import Text from '../atoms/TextAtom';

function DinamicTexts({Texts = [] }){
    return (
        <>
            {Texts.map((text) => (
                <Text key={text.id} variant={text.variant} className={text.className}>
                    {text.content}
                </Text>
            ))}
        </>
    )
}
export default DinamicTexts;