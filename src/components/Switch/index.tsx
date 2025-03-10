import React from 'react'
import { SwitchInput, SwitchLabel, SwitchWrapper } from './styles';
import { Loading } from '../../icons/Loading';

export interface SwitchProps {
  uniqId?: string;
  labelFor?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  size: "default" | "small";
  label?: string;
  className?: string;
}

export const Switch: React.FC<SwitchProps> = ({
  checked,
  className,
  defaultChecked,
  disabled,
  isLoading,
  size = "default",
  labelFor = "switch",
  label,
  uniqId = "switch",
}) => {
  return (
    <SwitchWrapper className={className}>
      {label && <div>{label}</div>}
      <>
        <SwitchInput
          disabled={disabled || isLoading}
          checked={checked}
          defaultChecked={defaultChecked}
          type="checkbox"
          id={uniqId}
          size={size}
          loading={isLoading}
        />
        <SwitchLabel htmlFor={labelFor}>
          <div>
            <Loading />
          </div>
        </SwitchLabel>
      </>
    </SwitchWrapper>
  )
}
