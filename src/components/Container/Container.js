import PropTypes from "prop-types";
const Container = ({ widthContainer, children }) => (
    <div style={{
        width: widthContainer,
        margin: "0 auto",
        padding: 20,
    }}>
        {children}
    </div>
);
Container.defaultProps = {
    widthContainer: "1200px",
    children: [],
}
Container.propTypes = {
    widthContainer: PropTypes.string,
    children: PropTypes.node,
};
export default Container;