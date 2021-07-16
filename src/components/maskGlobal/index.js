import React, { useState } from 'react'

export default function Mask({ type, value, onChange }) {

    function createMask(type, value) {
        if (type === 'cpf') {
            return value
                .replace(/\D/g, '')
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d{1,2})/, '$1-$2')
                .replace(/(-\d{2})\d+?$/, '$1')
        }
        if(type == 'cnpj'){
            return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/,'$1.$2')
            .replace(/(\d{3})(\d)/,'$1.$2')
            .replace(/(\d{3})(\d)/, '$1/$2')
            .replace(/(\d{4})(\d)/,'$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1')
        }
        if(type === 'phone'){
            return value
            .replace(/\D/g,'')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(-\d{5})\d+?$/,'$1')
        }
    }
    return (
        <div>
            <input
                type="text"
                value={createMask(type,value)}
                onChange={onChange}
            />
        </div>
    );
}