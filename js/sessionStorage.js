// JavaScript source code
function ProductSessionStorage(pageProductsUI) {





    this.setForSessionStorage = function () {



        sessionStorage.setItem("productsContent", JSON.stringify(pageProductsUI.pageProducts.productsData));
        sessionStorage.setItem("productsScrollY", pageProductsUI.pageProducts.productsScrollY);
        sessionStorage.setItem("productsPageIndex", pageProductsUI.pageProducts.pageIndex);
        sessionStorage.setItem("productsSearchWord", pageProductsUI.pageProducts.searchWord);
        sessionStorage.setItem("productsSpecialId", pageProductsUI.pageProducts.special.specialId);
        sessionStorage.setItem("productsIsNewArrived", pageProductsUI.pageProducts.displayOrderBy.isNewArrived);
        sessionStorage.setItem("productsOrderByPriceType", pageProductsUI.pageProducts.displayOrderBy.orderByPriceType);



    }

    this.clearForSessionStorage = function () {
        sessionStorage.clear();

    }

    this.getForSessionStorage = function () {

        pageProductsUI.pageProducts.productsData = JSON.parse(sessionStorage.getItem("productsContent"));
        pageProductsUI.pageProducts.productsScrollY = sessionStorage.getItem("productsScrollY");
        pageProductsUI.pageProducts["pageIndex"] = parseInt(sessionStorage.getItem("productsPageIndex"));
        pageProductsUI.pageProducts.searchWord = sessionStorage.getItem("productsSearchWord");
        pageProductsUI.pageProducts.special.specialId = sessionStorage.getItem("productsSpecialId");
        pageProductsUI.pageProducts.displayOrderBy.isNewArrived =
            JSON.parse(sessionStorage.getItem("productsIsNewArrived"));
        pageProductsUI.pageProducts.displayOrderBy.orderByPriceType =
            JSON.parse(sessionStorage.getItem("productsOrderByPriceType"));


    }


}