import styled from 'styled-components'
import Footer from '../Organisms/Footer'
import AdminMenu from '../Organisms/AdminMenu'
import AdminPlaylist from '../Organisms/AdminPlaylist'
import AdminUser from '../Organisms/AdminUser'

const AdministratorPageTemplateWrapper = styled.div`
    width: 100vw;
`

function AdministratorPageTemplate({
    playlistData,
    modifyPlaylistData,
    addPlaylistData,
    deletePlaylistData,
    userData,
    updateUserData,
    deleteUserData,
    manageType,
    changeManageType,
}) {
    return (
        <>
            <AdministratorPageTemplateWrapper>
                <AdminMenu manageType={manageType} changeManageType={changeManageType} />
                {manageType == 1 ? (
                    <AdminPlaylist
                        playlistData={playlistData}
                        modifyPlaylistData={modifyPlaylistData}
                        addPlaylistData={addPlaylistData}
                        deletePlaylistData={deletePlaylistData}
                    />
                ) : (
                    <AdminUser userData={userData} updateUserData={updateUserData} deleteUserData={deleteUserData} />
                )}
            </AdministratorPageTemplateWrapper>
            <Footer />
        </>
    )
}

export default AdministratorPageTemplate
