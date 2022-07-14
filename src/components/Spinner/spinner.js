import PuffLoader from "react-spinners/PuffLoader";

const override = {
    display: "block",
    margin: "10em auto",
    borderColor: "#A46BF5",
};

export default function Spinner({ loading }) {

    return (
        <div className="sweet-loading">
            <PuffLoader color="#A46BF5" loading={loading} cssOverride={override} size={150} />
        </div>
    );
}