//기록 저장 모달팝업(게임 종료 시)
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';
import { RecordProps } from '../model/gameType';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setRank, resetGame } from '../redux/propsSlice';

const Save = styled.div`
	width:100%;
	height:100%;
	display:flex;
	justify-content:center;
	align-items:center;
	background-color:rgba(255,255,255,0.3);
	position:fixed;
	inset:0;
	backdrop-filter:blur(3px);
	animation:saveBG 0.5s cubic-bezier(.49,-0.04,.09,.95);
	>div{
		width:calc(100% - 60px);
		max-width:550px;
		padding:40px;
		border-radius:6px;
		color:#fff;
		background-color:#042b21;
		animation:save 0.5s cubic-bezier(.49,-0.04,.09,.95);
		h3{
			margin-bottom:30px;
			font-size:2.5em;
			font-weight:bold;
		}
		button{
			width:40%;
			min-width:100px;
			margin-top:40px;
			padding:10px;
			font-size:1.13em;
			border-radius:6px;
			border:1px solid #12614c;
			color:#fff;
			background-color:#12614c;
			transition:0.3s;
			cursor:pointer;
			&:hover{
				border-color:#fff;
			}
			&:disabled{ //비활성화
				background-color: #777;
				color: #aaa;
				border-color: #aaa;
				cursor: no-drop;
			}
		}
	}
	@media ${props => props.theme.M} {
		>div{
			padding:30px 20px;
			button{
				margin-top:30px;
			}
		}	
	}
	@keyframes save {
		0%{
			transform:scale(0);
		}
		100%{
			transform:scale(1);
		}
	}
	@keyframes saveBG {
		0%{
			opacity:0;
		}
		100%{
			opacity:1;
		}
	}
`;
const User = styled.div`
	display:flex;
	justify-content:center;
	align-items:center;
	border-radius:6px;
	overflow:hidden;
	background-color:#fff;
	position:relative;
	&::before{
		content:"";
		width:2px;
		height:50%;
		background-color:#042b21;
		position:absolute;
		top:25%;
		left:calc(50% - 1px);
	}
	ul{
		width:50%;
		padding:20px;
		color:#042b21;
		&:last-child{
			li{
				&:last-child{
					color:orange;
				}
			}
		}
		li{
			font-size:1.5em;
			font-weight:bold;
			&:first-child{
				margin-bottom:10px;
				font-size:1.13em;
			}
			input{
				width:100%;
				font-size:1em;
				font-weight:bold;
				text-align:center;
				color:#042b21;
				&::placeholder{
					opacity:0.5;
				}
				&:hover{
					&::placeholder{
						opacity:1;
					}
				}
				&:focus{
					&::placeholder{
						opacity:0;
					}
				}
			}
		}
	}
	@media ${props => props.theme.M} {
		ul{
			padding:20px 15px;
		}
	}
	@media ${props => props.theme.S} {
		ul{
			li{
				&:first-child{
					font-size:1.4em;
				}
			}
		}
	}
`;

const Record: React.FC<RecordProps> = () => {
	const dispatch = useDispatch();
	const userRecord = useSelector((state: RootState) => state.props.userRecord);
	const [userName, setUserName] = useState<string>("");
	const [disableBtn, setDisableBtn] = useState<boolean>(true);

	const saveRecord = async(e: React.FormEvent) => { //게임 결과 DB저장
		e.preventDefault(); //페이지 리로드 방지

		if(userName && userRecord) { //닉네임과 기록이 있는 경우
			try {
				const res = await axios.post("/api/ranks", { //닉네임 기록 DB보내기
					userName: userName,
					userRecord: userRecord,
				});

				console.log("저장된 기록:", res.data); //보낸 기록 정보
				const updatedRankData = await axios.get("/api/ranks"); //최신 DB

				dispatch(setRank(updatedRankData.data)); //기록 갱신
				
				dispatch(resetGame()); //게임 초기화
			} catch (err) {
				console.error(err + "기록 저장 실패");
			}
		}
	}

	useEffect(() => {
		setDisableBtn(!userName)
	}, [userName])

	return (
		<Save>
			<div>
				<h3>게임 결과</h3>
				<User>
					<ul>
						<li>이름</li>
						<li>
							<input
								type="text"
								placeholder="입력해주세요."
								maxLength={4}
								onChange={(e) => {
									const inputValue = e.target.value;
									if(inputValue.length > 4) {
										alert("최대 4글자 까지만 입력 가능합니다.");
										setUserName(inputValue.slice(0, 4));
									} else{
										setUserName(inputValue);
									}
								}}
							/>
						</li>
					</ul>
					<ul>
						<li>내 기록</li>
						<li>{userRecord}</li>
					</ul>
				</User>

				<button
					onClick={saveRecord}
					disabled={disableBtn} //disableBtn이 true면 disabled
				>
					확인
				</button>
			</div>
		</Save>
	)
}

export default Record