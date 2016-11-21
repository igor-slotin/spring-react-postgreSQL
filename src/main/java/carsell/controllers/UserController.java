package carsell.controllers;

import carsell.models.User;
import carsell.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/user")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping(method = RequestMethod.POST, value = "/add")
    ResponseEntity<?> addUser(@RequestBody User input) {
        User user = userService.addUser(input);
        return ResponseEntity.ok(user.getId());
    }

    @RequestMapping(method = RequestMethod.POST, value = "/login")
    ResponseEntity<?> login(@RequestBody User input) {
        User user = userService.login(input);
        return ResponseEntity.ok(user.getId());
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{userId}")
    ResponseEntity<?> getUser (@PathVariable Long userId) {
        User user = userService.getUser(userId);
        return ResponseEntity.ok(user);
    }
}
