import React from "react";
import { Route, Routes } from "react-router-dom";
import EventListPage from "@adminPages/eventPage/List/Index";
import EventProductEnrollPage from "@adminPages/eventPage/Enroll/Index";
import EventBrandEnrollPage from "@adminPages/eventPage/Enroll/BrandIndex";
import EventProductEditPage from "@adminPages/eventPage/Edit/Index";
import EventBrandEditPage from "@adminPages/eventPage/Edit/BrandIndex";
import OrderPage from "@adminPages/Order/Index";
import AdminRefundList from "@adminPages/refund/List/Index";
import AdminRefundDetail from "@adminPages/refund/Detail/Index";
import AdminMileageView from "@adminPages/mileage/List/Index";
import AdminPage from "@adminPages/Index";
import AdminUserListPage from "@adminPages/userInfo/List/Index";
import AdminUserEditPage from "@adminPages/userInfo/Edit/Index";
import AdminFaqListPage from "@adminPages/faqPage/List/Index";
import AdminCancelList from "@adminPages/cancel/List/Index";
import AdminCancelDetail from "@adminPages/cancel/Detail/Index";
import BrandListPage from "@adminPages/item/brand/List/Index";
import BrandEditPage from "@adminPages/item/brand/Edit/Index";
import BrandEnrollPage from "@adminPages/item/brand/Enroll/Index";
import AdminErollPage from "@adminPages/faqPage/Enroll/Index";
import AdminEditPage from "@adminPages/faqPage/Edit/Index";
import AdminDirectAskPage from "@adminPages/directAskPage/List/Index";
import AdminAskEnrollPage from "@adminPages/directAskPage/Enroll/Index";
import AdminProduct from "@adminPages/item/product/List/Index";
import ProductEnrollPage from "@adminPages/item/product/Enroll/Index";
import ProductEditPage from "@adminPages/item/product/Edit/Index";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<AdminPage />}>
        {/* 회원관리 */}
        <Route path="user" element={<AdminUserListPage />} />
        <Route path="user/:memberId" element={<AdminUserEditPage />} />
        <Route path="mileage" element={<AdminMileageView />} />
        {/* 상품 관리 */}
        <Route path="product" element={<AdminProduct />} />
        <Route path="product/enroll" element={<ProductEnrollPage />} />
        <Route path="product/:id" element={<ProductEditPage />} />
        <Route path="brand" element={<BrandListPage />} />
        <Route path="brand/enroll" element={<BrandEnrollPage />} />
        <Route path="brand/:id" element={<BrandEditPage />} />
        {/* 이벤트 관리 */}
        <Route path="event" element={<EventListPage />} />
        <Route
          path="event/enrollproduct"
          element={<EventProductEnrollPage />}
        />
        <Route path="event/enrollbrand" element={<EventBrandEnrollPage />} />
        <Route
          path="event/editproduct/:eventId"
          element={<EventProductEditPage />}
        />
        <Route
          path="event/editbrand/:eventId"
          element={<EventBrandEditPage />}
        />
        {/* 주문관리 */}
        <Route path="order" element={<OrderPage />} />
        {/* 환불관리 */}
        <Route path="refund" element={<AdminRefundList />} />
        <Route path="refund/:id" element={<AdminRefundDetail />} />
        <Route path="cancel" element={<AdminCancelList />} />
        <Route path="cancel/:id" element={<AdminCancelDetail />} />
        {/* 고객센터 */}
        {/* faq */}
        <Route path="faq" element={<AdminFaqListPage />} />
        <Route path="faq/:faqId" element={<AdminEditPage />} />
        <Route path="faq/enroll" element={<AdminErollPage />} />
        {/* 1:1문의 */}
        <Route path="directask" element={<AdminDirectAskPage />} />
        <Route path="directask/:askId" element={<AdminAskEnrollPage />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
