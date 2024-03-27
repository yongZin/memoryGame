//게임 리셋 버튼
import React from 'react';
import { styled } from 'styled-components';
import { useDispatch } from 'react-redux';
import { resetGame } from '../redux/propsSlice';

const Btn = styled.button`
	padding:15px 20px;
	font-size:1.5em;
	text-transform:uppercase;
	letter-spacing:0.1em;
	border:0;
	color:#267c65;
	background-color:#fff;
	cursor:pointer;
	&:hover{
		color:#fff;
		background-color:#267c65;
	}
`;

const ResetBtn: React.FC = () => {
	const dispatch = useDispatch();

	return (
		<Btn onClick={() => { dispatch(resetGame()); }}>Reset Game</Btn>
	)
}

export default ResetBtn