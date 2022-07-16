const arr = [
    {
        link: 'https://www.coupang.com/vp/products/106776148?itemId=322767817&vendorItemId=3000056306&q=%EB%85%B9%EC%B0%A8&itemsCount=36&searchId=8ce8aa558c2d4fa38c08baa14d2c6efb&rank=27&isAddedCart=',
        image: '녹차이미지.png'
        
    },
    {
        link: 'https://www.coupang.com/vp/products/6526515188?itemId=14509495793&vendorItemId=81752433009&q=%EC%82%AC%EA%B3%BC&itemsCount=36&searchId=efbf710260d44013b05ce495c81ead28&rank=13&isAddedCart=',
        image: '사과이미지.png'
    },
    {
        link: 'https://www.coupang.com/vp/products/1379447438?itemId=2413555982&vendorItemId=70407963953&pickType=COU_PICK&q=%EC%9A%B0%EC%82%B0&itemsCount=36&searchId=f4f1d1e7e59d4955809b0be1ba833dd8&rank=2&isAddedCart=',
        image: '우산이미지.png'
    },
    {
        link: 'https://www.coupang.com/vp/products/221307135?itemId=691074472&vendorItemId=4770692342&q=%EB%AA%A8%EB%8B%88%ED%84%B0&itemsCount=36&searchId=ec2d876c2b774044a44803a5e6e1c36f&rank=3&isAddedCart=',
        image: '모니터이미지.png'
    },
    {
        link: 'https://www.coupang.com/vp/products/5398078819?itemId=8068840734&vendorItemId=74947677469&pickType=COU_PICK&q=%EC%8B%A0%EB%B0%9C&itemsCount=36&searchId=ce5342a13dd7468093b12681c479b92b&rank=1&isAddedCart=',
        image: '신발이미지.png'
    },
    {
        link: 'https://www.coupang.com/vp/products/5625704601?itemId=11696984031&vendorItemId=79548063314&pickType=COU_PICK&q=%EC%83%9D%EC%88%98&itemsCount=36&searchId=937d032267da42699015952c418ae418&rank=1&isAddedCart=',
        image: '생수이미지.png'
    },
    {
        link: 'https://www.coupang.com/vp/products/5768394698?itemId=9792619369&vendorItemId=77076203252&sourceType=srp_product_ads&clickEventId=0be75f51-c1c6-4bd4-9cc9-a664f9587363&korePlacement=15&koreSubPlacement=1&q=%EC%B1%85%EC%9E%A5&itemsCount=',
        image: '책장이미지.png'
    },
    {
        link: 'https://www.coupang.com/vp/products/6400569264?itemId=13683177333&vendorItemId=80934883228&pickType=COU_PICK&q=%EB%B0%98%ED%8C%94%ED%8B%B0%EC%85%94%EC%B8%A0&itemsCount=36&searchId=b2a5a705ceac4bb984714db712291241&rank=1&isAddedCart=',
        image: '반팔이미지.png'
    },
    {
        link: 'https://www.coupang.com/vp/products/3945059?itemId=19271476&vendorItemId=3028249584&sourceType=CATEGORY&categoryId=185573&isAddedCart=',
        image: '뚝배기이미지.png'
    },
    {
        link: 'https://www.coupang.com/vp/products/180352941?itemId=536034229&vendorItemId=70296014900&sourceType=CATEGORY&categoryId=185003&isAddedCart=',
        image: '커튼이미지.png'
    },
    {
        link: 'https://www.coupang.com/vp/products/6206460965?itemId=12345067556&vendorItemId=79614964530&sourceType=CATEGORY&categoryId=497103&isAddedCart=',
        image: '그래픽카드이미지.png'
    },
    {
        link: 'https://www.coupang.com/vp/products/4776873709?itemId=6103971454&vendorItemId=73400334121&sourceType=CATEGORY&categoryId=331801&isAddedCart=',
        image: '레고이미지.png'
    },
    {
        link: 'https://www.coupang.com/vp/products/6279539712?itemId=2269998822&vendorItemId=81752436628&sourceType=CATEGORY&categoryId=177215&isAddedCart=',
        image: '샤펜이미지.png'
    },
    {
        link: 'https://www.coupang.com/vp/products/5465837879?vendorItemId=75666435955&sourceType=SDP_ALSO_VIEWED&pickType=COU_PICK&searchId=fbc212b048bb44818bf104d97cb8969c&rmdId=fbc212b048bb44818bf104d97cb8969c&eventLabel=recommendation_widget_pc_sdp_001&platform=web&rmdABTestInfo=22922:B&rmdValue=p5580352997:vt-coupangchoice-1.0.0:p5465837879&isAddedCart=',
        image: '선풍기이미지.png'
    },
    {
        link: 'https://www.coupang.com/vp/products/6161798179?itemId=11963541785&vendorItemId=79236116140&isAddedCart=',
        image: '노트북이미지.png'
    },
    {
        link: 'https://www.coupang.com/vp/products/5191734929?itemId=7210135506&vendorItemId=74501677392&trcid=302042&traid=home_CategoryBest_C3&pickType=COU_PICK&q=%ED%9C%B4%EB%8C%80%EC%9A%A9%EC%9C%A0%EB%AA%A8%EC%B0%A8&itemsCount=36&searchId=f184cb47b6944d81903730d8d59074dd&rank=0&isAddedCart=',
        image: '유모차이미지.png'
    },
    {
        link: 'https://www.coupang.com/vp/products/4696338076?vendorItemId=73208059121&sourceType=SDP_ALSO_VIEWED&pickType=COU_PICK&searchId=4d0783406e654f3987af2f56395feeb2&rmdId=4d0783406e654f3987af2f56395feeb2&eventLabel=recommendation_widget_pc_sdp_001&platform=web&rmdABTestInfo=22922:B&rmdValue=p6591314799:vt-coupangchoice-1.0.0:p4696338076&isAddedCart=',
        image: '드론이미지.png'
    },    

]