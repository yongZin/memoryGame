import React from 'react';
import { styled } from 'styled-components';

const Skeleton = styled.div`
	height:100vh;
	display:flex;
	justify-content:center;
	align-items:center;
	gap:5%;
	padding:0 15px;
	background-color:#0a3c2f;
	position:fixed;
	inset:0;
	z-index:10000;
	div{
		width:100%;
		padding:10px 0;
		text-align:center;
		ul{
			display:inline-block;
			vertical-align:top;
			border-radius:6px;
			background-color:#0d614b;
			li{
				border-radius:6px;
				background-image:linear-gradient(to right, #0a3c2f 0%, #10795d 20%, #0a3c2f 40%, #0a3c2f 100%);
				background-size:1000px 104px;
				animation:skeleton 1s linear infinite forwards;
			}
			&.game{
				width:65%;
				max-width:560px;
				padding:40px 60px;
				li{
					&:nth-child(1){
						line-height:1.2;
						font-size:3em;
						font-weight:bold;
						color:transparent;
						letter-spacing:0.1em;
					}
					&:nth-child(2){
						margin-top:0.3em;
						line-height:2.5rem;
						font-size:1em;
						font-weight:bold;
						color:transparent;
					}
					&:nth-child(3){
						width:100%;
						max-width:440px;
						margin:10px auto 20px;
						padding-top:100%;
					}
					&:nth-child(4){
						width:220px;
						height:58px;
						margin:0 auto;
					}
				}
			}
			&.rank{
				width:30%;
				max-width:250px;
				margin-left:5%;
				padding:10px;
				li{
					height:29px;
					margin-bottom:6px;
					&:first-child{
						height:35px;
						margin-bottom:20px;
					}
					&:last-child{
						margin-bottom:10px;
					}
				}
			}
		}
	}
	@media ${props => props.theme.L} {
		padding-top:55px;
		div{
			ul{
				&.game{
					width:100%;
					max-width:470px;
					padding:40px;
				}
				&.rank{
					display:none;
				}
			}
		}
	}
	@media ${props => props.theme.S} {
		div{
			ul{
				&.game{
					padding:30px;
				}
			}
		}
	}
	@media ${props => props.theme.XS} {
		div{
			ul{
				&.game{
					padding:20px;
				}
			}
		}
	}
	@keyframes skeleton {
		0%{
			background-position:-468px 0;
		}
		100%{
			background-position:468px 0;
		}
	}
`;

const Loading = () => {
	return (
		<Skeleton>
			<div>
				<ul className='game'>
					<li>같은그림찾기</li>
					<li>카드 선택시 게임시작</li>
					<li></li>
					<li></li>
				</ul>

				<ul className='rank'>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
		</Skeleton>
	)
}

export default Loading