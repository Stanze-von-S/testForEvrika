import React from 'react';
import './TitleRow.css';

function TitleRow(props) {
  return (
    <tr>
      <th width='240' className='title-cell'>Фамилия</th>
      <th width='272' className='title-cell'>Имя</th>
      <th width='311' className='title-cell'>Отчество</th>
      <th width='329' className='title-cell'>E-mail</th>
      <th width='392' className='title-cell'>Логин</th>
      <th className='title-cell'></th>
    </tr>
  );
}

export default TitleRow;
