import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/footer';
import LegalNotice from './components/LegalNotice/legalNotice';
import PrivacyPolicy from './components/PrivacyPolicy/privacyPolicy';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ComingSoon from './components/ComingSoon/comingSoon';
import Terms from './components/Terms/terms';
import About from './components/About/about';
import Header from './components/Header/Header';
import UserAccount from './components/UserAccount/userAccount';
import MakeupProductList from './components/MakeupProductList/makeupProductList';
import ProductDescription from './components/ProductsDescription/productDescription';
import { SpinnerContextProvider } from './context/SpinnerContext';
import UserAccountData from './components/UserAccountData/userAccountData';
import UserAccountAddressList from './components/UserAccountAddressList/userAccountAddressList';
import UserAccountPassword from './components/UserAccountPassword/userAccountPassword';
import UserOrdersList from './components/UserOrdersList/userOrdersList';
import UserOrdersByStatus from './components/UserOrdersByStatus/userOrdersByStatus';
import UserWishlist from './components/UserWishList/userWishList'
import UserAddressForm from './components/UserAddressForm/userAddressForm';
import './App.css';
import UserAccountOverview from './components/UserAccountOverview/userAccountOverview';
import { UpdateAddressContextProvider } from './context/UpdateAddressContext';
import Order from './components/Order/order';
import NewAddressForm from './components/NewAddressForm/newAddressForm';
import MyReviewsList from './components/MyReviewsList/myReviewsList';
import CreateMyReview from './components/CreateMyReview/createMyReview';
import UpdateMyReview from './components/UpdateMyReview/updateMyReview';
import NewMakeupProductsList from './components/NewMakeupProductList/newMakeupProductList';
import Error403 from './components/Error403/error403';
import Cart from './components/Cart/cart';
import CheckoutAddress from './components/CheckoutAddress/checkoutAddress';


function App() {
  /* const isDesktop = useMedia('(min-width: 993px)') */

  return (
    <ScrollToTop>
      <div className="page-container">
        <div className="content-wrap">
          <SpinnerContextProvider>
            <UpdateAddressContextProvider>
              <Header />
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/*" element={<Navigate to="/home" />} />
                <Route path="/legal" element={<LegalNotice />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/comingSoon" element={<ComingSoon />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/about" element={<About />} />
                <Route path="/:productType" element={<MakeupProductList />} />
                <Route path="/New" element={<NewMakeupProductsList />} />
                <Route path="/search/:keyword" element={<MakeupProductList />} />
                <Route path="/product/:id" element={<ProductDescription />} />
                <Route path="account" element={<Navigate to="/home" />} />
                <Route path="account/:id" element={<UserAccount />} >
                  <Route index element={<UserAccountOverview />} />
                  <Route path="data" element={<UserAccountData />} />
                  <Route path="address" element={<UserAccountAddressList />} />
                  <Route path="addressForm" element={<UserAddressForm />} />
                  <Route path="updateAddressForm" element={<UserAddressForm />} />
                  <Route path="newAddress" element={<NewAddressForm />} />
                  <Route path="password" element={<UserAccountPassword />} />
                  <Route path="orders" element={<UserOrdersList />} />
                  <Route path="orders/:orderid" element={<Order />} />
                  <Route path=":status" element={<UserOrdersByStatus />} />
                  <Route path="wishlist" element={<UserWishlist />} />
                  <Route path="reviews" element={<MyReviewsList />} />
                </Route>
                <Route path="/products/:productId/review" element={<CreateMyReview />} />
                <Route path="/products/:productId/reviews/:reviewId" element={<UpdateMyReview />} />
                <Route path="/error403" element={<Error403 />} />
                <Route path="cart" element={<Cart />} />
                <Route path=":id/cart" element={<Cart />} />
                <Route path=":id/cart/address" element={<CheckoutAddress />} />
              </Routes>
            </UpdateAddressContextProvider>
          </SpinnerContextProvider>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    </ScrollToTop>
  );
}

export default App;
