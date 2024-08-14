import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover />
        </div>
    );
};

export default Menu;