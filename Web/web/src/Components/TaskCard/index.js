import React from 'react';
import * as S from './styles'

import iconDefault from '../../assets/default.png'


function TaskCard() {
  return  (
    <S.Container>
   
       <S.TopCard>
        <img src={iconDefault} alt="Icone da Tarefa"/>
        <h3>Titulo da Tarefa</h3>
       </S.TopCard>
        <S.BottomCard>
            <strong>17/10/2021</strong>
        </S.BottomCard>
    </S.Container>

  )
}

export default TaskCard;