import Category from "../category/category";
import Expense from "../expense/expense";

function BaseContainer({item}) {

    const onClick = (item) => {
        switch(item) {
            case 'categories':
                return <Category/>;
            case 'expenses':
                return <Expense/>;
            default:
                return null;
        }
    }

    return (
        <div>
            {onClick(item)}
        </div>
    )

}

export default BaseContainer;