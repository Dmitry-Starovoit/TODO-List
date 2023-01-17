import './List.css';

function List(props) {
    return (
      <div className="list">
         <div className="title">
            <h3>
                {props.title}
            </h3>
        </div>
        <div className="add_line">
            <input type="text" placeholder="Your ToDo..." />
            <button className="button_add">
                Add
            </button>
        </div>
        <div className="lines">
            <li><input className="checkbox" type="checkbox" checked={props.task[0].isDone} name="" id={props.task[0].id} />{props.task[0].name}</li>
            <li><input className="checkbox" type="checkbox" checked={props.task[1].isDone} name="" id={props.task[1].id} />{props.task[1].name}</li>
            <li><input className="checkbox" type="checkbox" checked={props.task[2].isDone} name="" id={props.task[2].id} />{props.task[2].name}</li>
        </div>
        <div className="viev_statictic">
            <li>
                <button className="button_all">
                    All
                </button>
            </li>
            <li>
                <button className="button_active">
                    Active
                </button>
            </li>
            <li>
                <button className="button_completed">
                    Completed
                </button>
            </li>
        </div> 
      </div>
    );
  }

  export default List;