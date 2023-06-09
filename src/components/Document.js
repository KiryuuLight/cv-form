import SidebarProfile from './SidebarProfile';
import SidebarAbout from './SidebarAbout';

const Document = ({ sampleValues }) => {
  return (
    <>
      <div className="document">
        <SidebarProfile inputValues={sampleValues} />
        <SidebarAbout inputValues={sampleValues} />
      </div>
    </>
  );
};

export default Document;
