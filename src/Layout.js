import SideBar from './components/featurs/SideBar/SideBar';
import AppRouter from './components/routing/AppRouter';
import Grid from '@material-ui/core/Grid';
export default function Layout() {
    return <Grid container>
    <Grid item sm={8} md={10} style={{marginLeft:"100px"}}><AppRouter/></Grid>
</Grid>
}