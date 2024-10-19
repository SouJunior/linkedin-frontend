import * as React from 'react';
import Switch from '@mui/material/Switch';
import { Container } from './styles'; 
import { useApi } from '../../hooks/useApi';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { useContext } from 'react';

interface SwitchButtonProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  keyword: string;
  location: string;
  userId: string;
};

export default function SwitchButton({ 
  checked, 
  onChange,
  keyword, 
  location
}: SwitchButtonProps) {
  const { createAlert } = useApi(); 
  const text = checked ? 'Alerta criado' : 'Alerta de vagas';
  const auth: any = useContext(AuthContext);
  const userId = auth.user.id;

  const handleSwitchChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event);

    if (!event.target.checked) return;

    try {
      await createAlert(keyword, location, userId); 
      console.log('Alerta criado com sucesso!');
    } catch (error) {
      console.error('Erro ao criar alerta:', error);
    };
  };

  return (
    <Container>
      <h2>{text}</h2>
      <Switch
        checked={checked}
        onChange={handleSwitchChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
    </Container>
  );
};
