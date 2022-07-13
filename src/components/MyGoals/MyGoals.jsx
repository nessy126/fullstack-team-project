import s from './MyGoals.module.scss';

let data=[
  {
      "title": "Amount of books",
      "amount": 3
  },
  {
      "title": "Amount of days",
      "amount": 28
  }
]

const MyGoals = (props) => {
  return ( <div className={s.goal__wrapper}>
              <div className={s.top__wrapper}>              
                <div className={s.title__wrapper}>
                  <h3 className={s.title}>My goals</h3>
                </div>
              </div>
              <ul className={s.list}>{data.map(({title, amount})=>{
                return(
                  <li key={title} className={s.item}>
                    <div className={s.amount}>{amount}</div>
                    <div className={s.text}>{title}</div>
                  </li>
                )
              })}</ul>
            </div> );
}

export default MyGoals;