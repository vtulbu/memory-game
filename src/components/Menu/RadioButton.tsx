import { useRadio, useRadioGroup, UseRadioProps } from "@chakra-ui/react";

import * as S from "./styled";

function RadioCard(props: { children: UseRadioProps | undefined }) {
  const { getInputProps, getCheckboxProps } = useRadio(props as UseRadioProps);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <S.BoxItem as="label">
      <input {...input} />
      <S.BoxMenu
        {...checkbox}
        cursor="pointer"
        _checked={{
          bg: "pickledBluewood.700",
          color: "white",
          transition: "background-color 300ms cubic-bezier(0.4, 0, 0.49, 1)",
        }}
      >
        {props.children}
      </S.BoxMenu>
    </S.BoxItem>
  );
}

interface Props {
  options: string[];
  name: string;
  defaultValue: string;
  onChange: (e: string) => void;
}

export function RadioButtons({ options, name, defaultValue, onChange }: Props) {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: name,
    defaultValue: defaultValue,
    onChange: (e) => onChange(e),
  });

  const group = getRootProps();

  return (
    <S.StyledHSTack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value as UseRadioProps}
          </RadioCard>
        );
      })}
    </S.StyledHSTack>
  );
}
