package devops.ecom.productservice.service;

import devops.ecom.productservice.dao.entities.Product;
import devops.ecom.productservice.dao.repos.ProductRepo;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
@Transactional
public class ProductServiceImpl implements ProductService {
    private ProductRepo productRepo ;

    public ProductServiceImpl(ProductRepo productRepo) {
        this.productRepo = productRepo;
    }

    @Override
    public Product createProduct(Product product) {
        product.setProductId(UUID.randomUUID().toString());
        product.setAddingDate(new Date());
        Product product1 = this.productRepo.insert(product);
        return product1;
    }

    @Override
    public Product updateProduct(Product product) {
        product.setAddingDate(new Date());
        Product saved = this.productRepo.save(product);
        return saved;
    }

    @Override
    public void deleteProduct(String productId) {
        this.productRepo.deleteById(productId);
    }

    @Override
    public Product getProductById(String productId) {
        return null;
    }

    @Override
    public List<Product> getProductsByCategory() {
        return null;
    }

    @Override
    public List<Product> getProductsByName(String name) {
        return null;
    }

    @Override
    public List<Product> getAllProduct() {
        return productRepo.findAll();
    }

    @Override
    public List<Product> getProductPage(int page, int size) {
        return null;
    }
}
