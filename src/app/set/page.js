import Link from 'next/link'

export default function Login() {
    return (
        <div className="wrap h100p">
            <div className="activityBox">
                <div className="fl wid21p">
                    <ul className="activityList">
                        <li>
                            <a href="#">내프로필</a>
                            <ul>
                                <li className="active"><a href="#" rel="act1">수정</a></li>
                                <li><a href="#" rel="act2">회원탈퇴</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">구독관리</a>
                            <ul>
                                <li><a href="#" rel="act5">언론사</a></li>
                                <li><a href="#" rel="act6">주제</a></li>
                                <li><a href="#" rel="act7">키워드</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">찜한기사</a>
                            <ul>
                                <li><a href="#" rel="act9">수정</a></li>
                            </ul>
                        </li>
                        {/* <li>
                            <a href="#">의견관리</a>
                            <ul>
                                <li><a href="#" rel="act13">내 의견</a></li>
                                <li><a href="#" rel="act14">댓글관리</a></li>
                            </ul>
                        </li> */}
                    </ul>
                </div>

                <div className="fr wid75p">
                <div id="act5" className="actContent active">
                    <h2 className="mb10">구독 언론사</h2>
                    <div className="wid750">
                    <table className="tableTypeSort mb10">
                        <colgroup>
                            <col style={{width:'15%'}}/>
                            <col style={{width:'45%'}}/>
                            <col style={{width:'40%'}}/>
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>검색</th>
                                <td>
                                    <input type="text"  id="" name="" />
                                </td>
                                <td>
                                    <button type="button" className="btnBlue">확인</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </div> 
                    <div className="wid400">
                        <table className="tableTypeBlue3 bt center">
                            <colgroup>
                                <col style={{width:'80%'}}/>
                                <col style={{width:'20%'}}/>

                            </colgroup>
                            <thead>
                                <tr>
                                    <th>언론사명</th>
                                    <th>삭제</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="center">중앙일보</td>
                                    <td><button type="button" class="btnRed">삭제</button></td>
                                </tr>
                                <tr>
                                    <td className="center">한국일보</td>
                                    <td><button type="button" class="btnRed">삭제</button></td>
                                </tr>
                                <tr>
                                    <td className="center">매일경제</td>
                                    <td><button type="button" class="btnRed">삭제</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>       
                </div>
                </div>
                
                <div className="fr wid75p">
                <div id="act6" className="actContent active">
                    <h2 className="mb10">구독 주제</h2>
                    <div className="wid750">
                    <table className="tableTypeSort mb10">
                        <colgroup>
                            <col style={{width:'15%'}}/>
                            <col style={{width:'45%'}}/>
                            <col style={{width:'40%'}}/>
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>검색</th>
                                <td>
                                    <input type="text"  id="" name="" />
                                </td>
                                <td>
                                    <button type="button" className="btnBlue">확인</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </div> 
                    <div className="wid400">
                        <table className="tableTypeBlue3 bt center">
                            <colgroup>
                                <col style={{width:'80%'}}/>
                                <col style={{width:'20%'}}/>

                            </colgroup>
                            <thead>
                                <tr>
                                    <th>주제</th>
                                    <th>삭제</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="center">정치</td>
                                    <td><button type="button" class="btnRed">삭제</button></td>
                                </tr>
                                <tr>
                                    <td className="center">경제</td>
                                    <td><button type="button" class="btnRed">삭제</button></td>
                                </tr>
                                <tr>
                                    <td className="center">사회</td>
                                    <td><button type="button" class="btnRed">삭제</button></td>
                                </tr>
                                <tr>
                                    <td className="center">생활/문화</td>
                                    <td><button type="button" class="btnRed">삭제</button></td>
                                </tr>
                                <tr>
                                    <td className="center">IT/과학</td>
                                    <td><button type="button" class="btnRed">삭제</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                           
                </div>
                </div>
               





            </div>
        </div>


        
        )
    }