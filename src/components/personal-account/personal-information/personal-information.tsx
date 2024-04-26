import React from 'react';
import './personal-information.css';

export function PersonalInformation() {
    return (
        <div className="block1">
            <div className="d-flex">
                <div className="top">
                    <p>Личная информация</p>
                </div>
                <div className="change">
                    <button id="izm">Изменить</button>
                </div>
            </div>
            <hr />
            <div>
                <div className="forms d-flex">
                    <div className="form1">
                        <form name="user_name" action="#" method="get">
                            <input type="text" name="user_name" placeholder="Ваше имя:" />
                        </form>
                        <form name="user_surname" action="#" method="get">
                            <input type="text" name="user_surname" placeholder="Ваша фамилия:" />
                        </form>
                    </div>
                    <div className="form2">
                        <form name="user_tel" action="#" method="get">
                            <input type="tel" name="user_tel" placeholder="Ваш номер телефона:" />
                        </form>
                        <form name="user_mail" action="#" method="get">
                            <input type="email" name="user_mail" placeholder="Ваш Email:" />
                        </form>
                    </div>
                    <div className="form3">
                        <form name="user_name" action="#" method="get">
                            <input type="text" name="user_login" placeholder="Ваш логин:" />
                        </form>
                        <form name="user_surname" action="#" method="get">
                            <input type="datetime" name="user_date" placeholder="Ваша дата рождения:" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

