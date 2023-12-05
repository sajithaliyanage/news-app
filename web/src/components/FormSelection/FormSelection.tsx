import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { StyledFormCntrol } from './FormSelection-styles';
import { SelectionItem } from '../../types/selectItems';

interface FormSelectionProps {
  title: string;
  value: string;
  options: SelectionItem[];
  onChange: (event: SelectChangeEvent<unknown>, child: React.ReactNode) => void;
}

const FormSelection = (props: FormSelectionProps) => {
  const { title, value, options, onChange } = props;
  return (
    <StyledFormCntrol variant="standard">
      <InputLabel>{title}</InputLabel>
      <Select value={value} onChange={onChange}>
        {options.map((item: SelectionItem, index: number) => {
          return (
            <MenuItem key={index} value={item.type}>
              {item.label}
            </MenuItem>
          );
        })}
      </Select>
    </StyledFormCntrol>
  );
};

export default FormSelection;
