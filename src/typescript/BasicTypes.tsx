import React from 'react'

export const BasicTypes = () => {
    const name: string = 'Nestor';
    const age: number = 38;
    const isActive: boolean = true;

    const powers: string[] = ['React', 'ReactNative', 'Angular', 'Vue', 'Qwik'];
    return (
        <>
            <h3>Tipos basicos</h3>
            {name} {age} {isActive ? 'true' : 'false '}
            <br />
            {powers.join(', ')}
        </>
    )
}
