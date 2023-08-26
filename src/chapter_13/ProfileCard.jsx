import Card from "./Card";

function ProfileCard(props){
    return (
        <Card title="CS Kim" backgroundColor="#4ea04e">
            <p>안녕하세요, 김창식입니다.</p>
            <p>저는 리액트를 공부하고 있습니다.</p>
        </Card>
    );
}

export default ProfileCard;