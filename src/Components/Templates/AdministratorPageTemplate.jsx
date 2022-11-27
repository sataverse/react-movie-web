import styled from 'styled-components'
import MainHeader from '../Organisms/MainHeader'
import Footer from '../Organisms/Footer'
import AdminMenu from '../Organisms/AdminMenu'
import AdminMainBanner from '../Organisms/AdminMainBanner'
import AdminPlaylist from '../Organisms/AdminPlaylist'
import AdminUser from '../Organisms/AdminUser'

import { useState, useEffect } from 'react'

const AdministratorPageTemplateWrapper = styled.div`
    width: 100vw;
`

function AdministratorPageTemplate({bannerData, addBannerData, modifyBannerData, deleteBannerData, playlistData, modifyPlaylistData, addPlaylistData, deletePlaylistData, userData, updateUserData, deleteUserData, manageType, changeManageType}) {
    
    return(
        <>
            <MainHeader />
            <AdministratorPageTemplateWrapper>
                <AdminMenu manageType={manageType} changeManageType={changeManageType} />
                {manageType == 0 ? 
                    <AdminMainBanner bannerData={bannerData} addBannerData={addBannerData} modifyBannerData={modifyBannerData} deleteBannerData={deleteBannerData} /> : 
                    null}
                {manageType == 1 ? 
                    <AdminPlaylist playlistData={playlistData} modifyPlaylistData={modifyPlaylistData} addPlaylistData={addPlaylistData} deletePlaylistData={deletePlaylistData}/> : 
                    null}
                {manageType == 2 ? <AdminUser userData={userData} updateUserData={updateUserData} deleteUserData={deleteUserData} /> : null}
            </AdministratorPageTemplateWrapper>
            <Footer />
        </>
    )
}

export default AdministratorPageTemplate