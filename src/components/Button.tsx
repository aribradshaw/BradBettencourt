import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

type BaseProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  className?: string;
};

type AnchorProps = BaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

type NativeButtonProps = BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
};

export type ButtonProps = AnchorProps | NativeButtonProps;

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, variant = 'primary', fullWidth, className, ...rest } = props as any;
  const classes = [
    'btn',
    variant === 'primary' && 'btn-primary',
    variant === 'secondary' && 'btn-secondary',
    variant === 'outline' && 'btn-outline',
    fullWidth && 'btn-block',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if ('href' in props && props.href) {
    const anchorProps = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
};


