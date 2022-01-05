import "./product.css";
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";

export default function Product() {
	return (
		<div className="product">
			<div className="productTitleContainer">
				<h1 className="productTitle">Product</h1>
				<Link to="/newproduct">
					<button className="productAddButton">Create</button>
				</Link>
			</div>
			<div className="productTop">
				<div className="productTopLeft">
					<Chart
						data={productData}
						dataKey="Sales"
						title="Sales Performance"
					/>
				</div>
				<div className="productTopRight">
					<div className="productInfoTop">
						<img
							src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fphotos1.iorbix.com%2F00%2F00%2F00%2F00%2F02%2F48%2F05%2F95%2FNitocris-Faraon-de-Egipto-8gmjtJ85W-b.jpg&f=1&nofb=1"
							alt=""
							className="productInfoImg"
						/>
						<span className="productName">Apple Airdrop</span>
					</div>
					<div className="productInfoBottom">
						<div className="productInfoItem">
							<span className="productInfoKey">id:</span>
							<span className="productInfoValue">321</span>
						</div>
						<div className="productInfoItem">
							<span className="productInfoKey">sales:</span>
							<span className="productInfoValue">5321</span>
						</div>
						<div className="productInfoItem">
							<span className="productInfoKey">active:</span>
							<span className="productInfoValue">yes</span>
						</div>
						<div className="productInfoItem">
							<span className="productInfoKey">in stock:</span>
							<span className="productInfoValue">no</span>
						</div>
					</div>
				</div>
			</div>
			<div className="productBottom">
				<form className="productForm">
					<div className="productFormLeft">
						<label>Product Name</label>
						<input type="text" placeholder="Apple Aidrop" />
						<label>In Stock</label>
						<select name="inStock" id="inStock">
							<option value="yes">Yes</option>
							<option value="no">NO</option>
						</select>
						<label>Active</label>
						<select name="active" id="active">
							<option value="yes">Yes</option>
							<option value="no">NO</option>
						</select>
					</div>
					<div className="productFormRight">
						<div className="productUpload">
							<img
								src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fphotos1.iorbix.com%2F00%2F00%2F00%2F00%2F02%2F48%2F05%2F95%2FNitocris-Faraon-de-Egipto-8gmjtJ85W-b.jpg&f=1&nofb=1"
								alt=""
								className="productUploadImg"
							/>
							<label htmlFor="file">
								<Publish />
							</label>
							<input
								type="file"
								id="file"
								style={{ display: "none" }}
							/>
						</div>
						<button className="productButton">Update</button>
					</div>
				</form>
			</div>
		</div>
	);
}
