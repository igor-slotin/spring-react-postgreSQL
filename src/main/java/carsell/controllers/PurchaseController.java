package carsell.controllers;

import carsell.services.PurchaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/purchase")
public class PurchaseController {
    private final PurchaseService purchaseService;

    @RequestMapping(method = RequestMethod.POST, value = "/{userId}/{carId}")
    ResponseEntity<?> buyCar(@PathVariable Long userId, @PathVariable Long carId) {
        return ResponseEntity.ok(this.purchaseService.buyCar(userId, carId));
    }

    @Autowired
    public PurchaseController (PurchaseService purchaseService) {
        this.purchaseService = purchaseService;
    }
}
