import styled from 'styled-components'
import MainHeader from '../Organisms/MainHeader'
import Footer from '../Organisms/Footer'
import AdminMenu from '../Organisms/AdminMenu'
import AdminPlaylist from '../Organisms/AdminPlaylist'
import AdminUser from '../Organisms/AdminUser'

import { useState, useEffect } from 'react'

const AdministratorPageTemplateWrapper = styled.div`
    width: 100vw;
`

function AdministratorPageTemplate({playlistData, modifyPlaylistData, addPlaylistData, deletePlaylistData, userData, updateUserData, deleteUserData, manageType, changeManageType}) {
    
    return(
        <>
            <MainHeader />
            <AdministratorPageTemplateWrapper>
                <AdminMenu manageType={manageType} changeManageType={changeManageType} />
                {manageType == 1 ? 
                    <AdminPlaylist playlistData={playlistData} modifyPlaylistData={modifyPlaylistData} addPlaylistData={addPlaylistData} deletePlaylistData={deletePlaylistData}/> : 
                    <AdminUser userData={userData} updateUserData={updateUserData} deleteUserData={deleteUserData} />}
            </AdministratorPageTemplateWrapper>
            <Footer />
        </>
    )
}

export default AdministratorPageTemplate