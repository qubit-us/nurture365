import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
}

export const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}: ButtonProps) => {
    const baseClass = 'btn';
    const variantClass = `btn-${variant}`;
    // We can add size classes if we define them in CSS, for now we stick to default

    return (
        <button
            className={`${baseClass} ${variantClass} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
